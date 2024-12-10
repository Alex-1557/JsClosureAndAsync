globalThis.isDirectEval = false;
{
  const isDirectEval = true;
  console.log(eval("isDirectEval")); 
  console.log((eval)("isDirectEval")); 
  console.log((0, eval)("isDirectEval"));
}