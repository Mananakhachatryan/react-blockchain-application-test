//import environmentResolver from '../../environment/index';
import axios from 'axios';

let cancel;
const CancelToken = axios.CancelToken;

const Http = {
    token: (currentState) => { return currentState.user.user.idToken },
    get: (url, currentState, custom, token) => {
        return new Promise((resolve, reject) => {
            //let host = environmentResolver.config().serverless;
            let host = 'http://localhost:8080'
            //'/events/upcoming/city?city=oslo&offset=1&limit=20'
            let postUrl = custom ? url : host + url;
            let headers = {
                'Content-Type': 'application/json',
                //'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
            };
            axios.get(postUrl, {
                headers: headers
            }).then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    },
    delete: (url, body, currentState, custom, token) => {
        return new Promise((resolve, reject) => {
            //let host = environmentResolver.config().serverless;
            let host = ''
            let postUrl = custom ? url : host + url;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
            };
            axios({
                url: postUrl,
                data: JSON.stringify(body),
                method: 'delete',
                timeout: 40000,
                headers: headers
            }).then((response) => resolve(response)).catch((err) => {
                reject(err);
            });
        })
    },
    post: (url, body, currentState, custom, token) => {
        return new Promise((resolve, reject) => {
            //let host = environmentResolver.config().serverless;
            let host = ''
            let postUrl = custom ? url : host + url;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
            };
            axios({
                url: postUrl,
                data: JSON.stringify(body),
                method: 'post',
                timeout: 40000,
                headers: headers
            }).then((response) => resolve(response)).catch((err) => {
                reject(err);
            });
        })
    },
    put: (url, body, currentState, custom, token) => {
        return new Promise((resolve, reject) => {
            //let host = environmentResolver.config().serverless;
            let host = ''
            let postUrl = custom ? url : host + url;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
            };
            axios({
                url: postUrl,
                data: JSON.stringify(body),
                method: 'put',
                timeout: 40000,
                headers: headers
            }).then((response) => resolve(response)).catch((err) => {
                reject(err);
            });
        })
    },
    autocomplete: (url, body, currentState, custom, token) => {
        return new Promise((resolve, reject) => {
            if (cancel != undefined) {
                cancel('canceled');
            }
            let host = ''
            //let host = environmentResolver.config().serverless;
            let postUrl = custom ? custom + url : host + url;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
            };
            axios.get(
                postUrl,
                {
                    params: body,
                    timeout: 40000,
                    headers: headers,
                    cancelToken: new CancelToken(function executor(c) {
                        cancel = c;
                    }),
                }
                ).then((response) => resolve(response))
                .catch((err) => {
                    reject(err);
                });
        })
    },
    autocompletePost: (url, body, currentState, custom, token) => {
      return new Promise((resolve, reject) => {
          if (cancel != undefined) {
              cancel('canceled');
          }
          let host = ''
          //let host = environmentResolver.config().serverless;
          let postUrl = custom ? url : host + url;
          let headers = {
              'Content-Type': 'application/json',
              'Authorization': token ? token : currentState ? Http.token(currentState()) : ''
          };
          axios({
                  url: postUrl,
                  method: 'post',
                  data: JSON.stringify(body),
                  timeout: 40000,
                  headers: headers,
                  cancelToken: new CancelToken(function executor(c) {
                      cancel = c;
                  }),
              }
              ).then((response) => resolve(response))
              .catch((err) => {

              });
      })
  }
};

export default Http;
