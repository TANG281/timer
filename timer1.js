const timer1 = process.argv.slice(2)
for (const num of timer1) {
  if (Number(num) > 0) {
  setTimeout(() => process.stdout.write('\x07'), Number(num) * 1000);
  }
};
