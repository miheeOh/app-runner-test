import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';
const randomBytes = promisify(crypto.randomBytes);

const region = '';
const bucketName = '';
const accessKeyId = '';
const secretAccessKey = '';

// s3 인스턴스 생성
const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

// s3 링크만 생성 하고, 이미지 업로드는 생성된 url을 클라이언트측에 전송하여 클라이언트측에서 업로드. 
const generateUploadUrl = async () => {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');
    
    // Key는 s3 객체를 만들때 생성되는 url에서 객체명 뒤에 오는 부분이다.
    // s3 url이 중복되면 예상치 못한 결과가 발생할 수 있으므로 url이 중복되어서는 안 된다.
    // 때문에 crypto와 util모듈을 이용하였다.
    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60,
    })
    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    return uploadUrl;
}

export {
    generateUploadUrl
}