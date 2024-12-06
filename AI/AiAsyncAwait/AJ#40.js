//Promise.race with async/await:

async function raceExample() {
  try {
    const result = await Promise.race([
      new Promise((resolve) => setTimeout(() => resolve('First!'), 1000)),
      new Promise((resolve) => setTimeout(() => resolve('Second!'), 500)),
    ]);
    console.log(result); // Outputs: "Second!"
  } catch (error) {
    console.error('Error in race:', error);
  }
}
raceExample();
