import yeast from "yeast";
import { Open, URLs, Close } from "../swagger/index";

function buildOpenParams(model, framework, batch_size, trace_level) {
  return {
    body: {
      framework_name: framework.name,
      framework_version: framework.version,
      model_name: model.name,
      model_version: model.version,
      options: {
        batch_size: batch_size,
        execution_options: {
          trace_level: trace_level,
          device_count: {
            GPU: 0,
          },
        },
      },
    },
  };
}

function pFinally(promise, onFinally) {
  onFinally = onFinally || (() => { });

  return promise.then(
    val => Promise.resolve(onFinally()).then(() => val),
    err =>
      Promise.resolve(onFinally()).then(() => {
        throw err;
      })
  );
}

export default function predict(imageUrls, models, frameworks, batch_size, trace_level) {
  let spanHeaders = {};

  const run = (imageUrls, model, framework) => {
    let predictor = null;
    let openParams = buildOpenParams(model, framework, batch_size, trace_level);
    console.log(openParams);

    const res = pFinally(
      Open(openParams)
        .catch(error => {
          throw error;
        })
        .then(response => {
          console.log("URLs");
          console.log({ urls: imageUrls });
          predictor = response;
          spanHeaders = predictor.headers;
          return URLs({
            headers: spanHeaders,
            body: {
              predictor: {id: predictor.id},
              urls: imageUrls.map(url => {
                return {
                  id: yeast(),
                  data: url,
                };
              }),
            },
          });
        })
        .then(response => {
          return {
            model: model,
            framework: framework,
            traceId: spanHeaders["x-b3-traceid"],
            response: response.responses,
          };
        }),
      function () {
        if (predictor && predictor.id) {
          Close({ body: { id: predictor.id } }).catch(function (e) { });
        }
      }
    );
    console.log(res);
    return res;
  };
  let pairs = [];
  models.map(model =>
    frameworks.map(framework => pairs.push({ model: model, framework: framework }))
  );
  return Promise.all(pairs.map(pair => run(imageUrls, pair.model, pair.framework))).then(function (
    features
  ) {
    console.log(features);
    return features;
  });
}
