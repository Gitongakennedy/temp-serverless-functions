const person={
 name:'Kennedy',
 handles:'',
 school:''
}

exports.handler = async (event,context,cb)=>{
 return{
  statusCode:200,
  body:'Serverless functions first example'
 }
}