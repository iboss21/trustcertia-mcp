const domain=process.argv[2]?.toLowerCase();
if(!domain||!/^([a-z0-9-]+\.)+[a-z]{2,63}$/.test(domain))throw Error("Pass an exact public hostname");
const r=await fetch("https://trustcertia.com/mcp",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({jsonrpc:"2.0",id:1,method:"tools/call",params:{name:"check_domain",arguments:{domain}}}),signal:AbortSignal.timeout(15000)});
if(!r.ok)throw Error(`MCP HTTP ${r.status}`);
const result=await r.json();if(result.error)throw Error(result.error.message);
console.log(JSON.stringify(result.result.structuredContent,null,2));
