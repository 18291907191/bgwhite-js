/**
 * @description 请求工具类
 * @since 20200512
 */
(function() {
  // 监听网络连接
  window.addEventListener('offline', () => {
    window.globalMessage.error('网络断开连接');
  });
  window.addEventListener('online', () => {
    window.globalMessage.success('网络重新连接').then(res => {
      location.reload();
    });
  });
})();

// 请求时loading配置
var loading;

function startLoading() {
  // loading = Vue.prototype.$loading({
  //   lock: true,
  //   text: 'Loading...',
  //   background: 'rgba(0, 0, 0, 0.5)',
  //   target: document.querySelector('.loading-area') // 设置加载动画区域
  // });
}
function endLoading() {
  loading.close();
}
var needLoadingRequestCount = 0;

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}
// 请求拦截
window.axios.interceptors.request.use(config => {
  config.headers.fromOrigin = 'bgwhite-front';
  // showFullScreenLoading();
  // if(!Cookies.load('adminToken')) {
  //   return config;
  // }
  // const token = Cookies.load('adminToken');
  // config.headers['Token'] = token;
  return config;
}, err => {
  // tryHideFullScreenLoading();
  return Promise.resolve(err);
});

// // 响应拦截
window.axios.interceptors.response.use(res => {
  // tryHideFullScreenLoading();
  switch (res.data.code) {
    case 200:
      return res.data.result;
    case 400:
      window.globalMessage.error(res.data.message);
      return Promise.reject(res.data.message);
    case 401:
      window.globalMessage.error(res.data.message);
      Router.push({ path: '/login' });
      // Cookies.remove('adminToken');
      return Promise.reject(res.data.message);
    case 201:
      window.globalMessage.error(res.data.message);
      return res.data.result;
    case 403:
      window.globalMessage.error(res.data.message);
      // Cookies.remove('adminToken');
      Router.push({ pathname: '/login' });
      return Promise.reject(res.data);
    case 500:
      window.globalMessage.error('请求出错⊙﹏⊙∥');
      return Promise.reject(res.data.message);
    default:
      return Promise.reject(res);
  }
}, err => {
  switch (err.response.status) {
    case 500:
      window.globalMessage.error('500，服务器出小差了⊙﹏⊙∥');
      return Promise.reject(err);
    case 504:
      window.globalMessage.error('500，服务器被吃了⊙﹏⊙∥');
      return Promise.reject(err);
    case 404:
      window.globalMessage.error('404,请求资源未发现⊙﹏⊙∥');
      return Promise.reject(err);
    case 403:
      window.globalMessage.error('403，权限不足,请联系狗尾草!');
      return Promise.reject(err);
    default:
      window.globalMessage.error('网络超时');
  }
});

window.axios.defaults.timeout = 300000; // 请求超时5fen

window.postJsonRequest = function(url, params) {
  return window.axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

window.postRequest = function(url, params) {
  return window.axios({
    method: 'post',
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};

window.postHTMLRequest = function(url, params) {
  return window.axios({
    method: 'post',
    dataType: 'html',
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (const it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};

window.getRequest = function(url, data = {}) {
  return window.axios({
    method: 'get',
    params: data,
    url: url
  });
};
