function fruits(item: string | number) {
  // will show warning as argument item is never used: Enabling -> `noUnusedParameters
  let data = 10; // will show warning data is defined but never used: Enabling-> `noUnusedLocals`
  // return true;

  if (item === "orange") {
    return item;
  } else {
    console.log("else"); // will show warning as not all path have return: Enabling -> `noImplicitReturns
  }
}

fruits("orange");

//As of now we can see there is no issue, everything is fine, but still there is issue:
// We can see it by enabling: `noFallthroughCasesInSwitch`
function fruits2(item: string | number) {
  switch (item) {
    case "fruit": //will show warning , here we haven't provided break keywords
      console.log("This is a fruit");
    case "color":
      console.log("This is a color");
  }
}

fruits2("orange");
