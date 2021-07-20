import Encodr from 'encodr'
import crypto from 'crypto-js'
const MSGPACK = new Encodr("msgpack")

let data = [
    {maSV:'NV0001',ten:'設定'}
]
// 
const Encode_LoopBtoa = (n,data)=>{
    var result = data
    for(let i=0;i<n;i++){
        result  = window.btoa(result)
    }
    return result
}
const Decode_LoopAtoa = (n,data)=>{
    var result = data
    for(let i=0;i<n;i++){
        result  = window.atob(result)
    }
    return result
}

const EncodeJson = (_data)=>{
    try {
        var result = MSGPACK.encode(_data).toString('hex') 
        return  Encode_LoopBtoa(5,result)  
    } catch (error) {
        console.log(error)
    }
} // return String

const DecodeJson = (_data)=>{
    var result = Decode_LoopAtoa(5,_data)
    return MSGPACK.decode(Buffer.from(result,'hex')) 
                                                    // Key     ,Value
}// return Json


const EncodeString_AES = (key,data)=>{
    return crypto.AES.encrypt(data,key)
}

const DecodeString_AES = (key,data)=>{
    return crypto.AES.decrypt(data,key).toString(crypto.enc.Utf8)
}

// console.log(EncodeString('admin','admin123'))
export default  {
    Encode_LoopBtoa,
    EncodeJson,DecodeJson
    ,EncodeString_AES,DecodeString_AES,Decode_LoopAtoa
}