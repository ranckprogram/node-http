class Base {
    constructor(code, msg, data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    setCode(code) {
        this.code = code;
    }
    getCode() {
        return this.code;
    }
    setMsg(msg) {
        this.msg = msg;
    }
    getMsg() {
        return this.msg;
    }
    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
    getRes() {
        return {
            'code': this.code,
            'msg': this.msg,
            'data': this.data
        };
    }
}
module.exports = {
    SUCCESS: new Base(0, '成功', {}),
}