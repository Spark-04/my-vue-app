const env = import.meta.env.MODE || 'prod';
const Envconfig ={
    development:{
        baseApi:'/api',
        mockApi:'https://apifoxmock.com/m1/4068509-0-default/api'
    },
    text:{
        baseApi:'//text.future.com/api',
        mockApi:'https://apifoxmock.com/m1/4068509-0-default/api'
    },
    prod:{
        baseApi:'//future.com/api',
        mockApi:'https://apifoxmock.com/m1/4068509-0-default/api'
    }

};
export default{
    env,
    ...Envconfig[env],
    mock:  false
}