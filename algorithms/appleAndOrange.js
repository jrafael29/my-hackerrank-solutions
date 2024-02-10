function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleSum = 0;
  let orangeSum = 0;

  for (const appleDistance of apples) {
    let appleFall = a + appleDistance;
    if (appleFall >= s && appleFall <= t) {
      appleSum++;
    }
  }
  for (const orangeDistance of oranges) {
    let orangeFall = b + orangeDistance;

    if (orangeFall >= s && orangeFall <= t) {
      orangeSum++;
    }
  }
  console.log(appleSum);
  console.log(orangeSum);
}
