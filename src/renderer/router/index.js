import Vue from 'vue'
import Router from 'vue-router'

const LandingPage = require(/* webpackChunkName: "landingpage" */ '@/components/LandingPage');
const CloudFront = require(/* webpackChunkName: "cloudfront" */ '@/components/CloudFront');
const Lambda = require(/* webpackChunkName: "lambda" */ '@/components/Lambda');
const S3 = require(/* webpackChunkName: "s3" */ '@/components/S3');
const SQS = require(/* webpackChunkName: "sqs" */ '@/components/SQS');
const CloudWatch = require(/* webpackChunkName: "cloudwatch" */ '@/components/CloudWatch');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: LandingPage.default
        },
        {
            path: '/cloudfront',
            name: 'cloudfront',
            component: CloudFront.default
        },
        {
            path: '/lambda',
            name: 'lambda',
            component: Lambda.default
        },
        {
            path: '/s3',
            name: 's3',
            component: S3.default
        },
        {
            path: '/sqs',
            name: 'sqs',
            component: SQS.default
        },
        {
            path: '/cloudwatch',
            name: 'cloudwatch',
            component: CloudWatch.default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
