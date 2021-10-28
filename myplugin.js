import com_components from './com_component/index'
export default {
    install(vue) {
        /*添加自定义组件*/
        com_components.forEach(com => {
            vue.component(com.name,com.component)
        })
        // 过滤无效提交参数
        vue.prototype.trim = params => {
            if (params instanceof Object) {
                for (let i in params) {
                    if (params[i] === '' || params[i] === null || params[i] === undefined) {
                        delete params[i]
                    }
                }
                return params
            } else {
                return false
            }
        }
        // 复制对象数据
        vue.prototype.copy = (obj) => {
            if (!obj) {
                return null
            } else {
                return JSON.parse(JSON.stringify(obj))
            }
        }
        //phoneFormate
        vue.prototype.phoneFormate = function (val) {
            let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(val.trim())) {
                vue.$vux.toast.show({
                    text: '请输入正确的手机号'
                })
                return false
            } else {
                return true
            }

        },
            // 时间格式化
            vue.prototype.formateDate = function (time, dateStr) {
                dateStr = dateStr || 'Y.m.d'
                var date
                if (time) {
                    if (typeof time === 'number') {
                        time = time * 1000
                        date = new Date(time)
                    }
                    if (typeof time === 'object') {
                        date = time
                    }
                } else {
                    date = new Date()
                }
                var year = date.getFullYear()
                var month = (date.getMonth() + 1 + '').length === 1 ? 0 + '' + (1 + date.getMonth()) : date.getMonth() + 1
                var day = (date.getDate() + '').length === 1 ? 0 + '' + date.getDate() : date.getDate()
                var hours = (date.getHours() + '').length === 1 ? 0 + '' + date.getHours() : date.getHours()
                var min = (date.getMinutes() + '').length === 1 ? 0 + '' + date.getMinutes() : date.getMinutes()
                var second = (date.getSeconds() + '').length === 1 ? 0 + '' + date.getSeconds() : date.getSeconds()
                dateStr = dateStr.replace('Y', year)
                    .replace('m', month)
                    .replace('d', day)
                    .replace('H', hours)
                    .replace('i', min)
                    .replace('s', second)
                return dateStr
            },
            // 判断假
            vue.prototype.isFalse = function (val) {
                if (val === null || val === '' || val === undefined || val === 0 || val === '0' || val === false) {
                    return true
                }
                return false
            },
            // 序列化参数
            vue.prototype.generateParamData = function (jsonObject) {
                let str = '';
                for (let key in jsonObject) {
                    if (str == '')
                        str = key + '=' + jsonObject[key];
                    else
                        str = str + '&' + key + '=' + jsonObject[key];
                }
                return str;
            },
            //加密参数
            vue.prototype.formateSendDate = function (sendData) {
            let timeS=Date.parse(new Date());
                let data = {
                    token: sessionStorage.getItem("token"),
                    timestamp: timeS,
                    businessMsg: JSON.stringify(sendData)
                };
                let encodeData = base64.encode(base64.encode(data.businessMsg + keyvalue,"UTF-8"),"UTF-8");
                data.businessMsg = encodeData; // 这里使用加密数据
                data.sign = md5(this.generateParamData(data));
                data.businessMsg = JSON.stringify(sendData);
                return data;
            },
            //未登录参数
            vue.prototype.noLoginSendDate = function (sendData) {
                let timeS=Date.parse(new Date());
                let data = {
                    token: sessionStorage.getItem("token"),
                    timestamp: timeS,
                    businessMsg: JSON.stringify(sendData)
                };
                return data;
            };

            //AJAX 与后台交互数据
            vue.prototype.ajaxLoadData = function (url ,isMemberUrl , ___this ,  sendData  ,func) {
                let data = null
                if (isMemberUrl) {
                    url = "/u" + url ;
                    data = this.formateSendDate(sendData);
                } else {
                    url = "/puk" + url ;
                    data = this.noLoginSendDate(sendData);
                }
                // 加
                Ajax.post(`${Load + url}`,  data).then(rs => {
                    ___this.$store.commit('updateLoadingStatus', {isLoading: false});
                    func(rs);

                }).catch(error => {
                    console.log(error)
                })

            };
    }
}