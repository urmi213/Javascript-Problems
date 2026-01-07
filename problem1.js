function reverse(str) {
  let i = str.length - 1;
  let reversed = "";

  while (i >= 0) {
    reversed = reversed + str[i];
    i--;
  }

  return reversed;
}

console.log(reverse("hello"));
