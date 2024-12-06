//Asynchronous Operations Inside Event Handlers

child.addEventListener("click", async () => {
    console.log("Clicked!"); // Synchronous
    const data = await fetchData(); // Async (non-blocking)
    console.log("Data:", data);   // Continues after async is complete
});


