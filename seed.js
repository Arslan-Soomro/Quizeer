const seedData = async () => {
  for(let i = 0; i < 10; i++){
    let body = {
    	title: `${i+1}th Quiz`,
    	views: 0,
    	questions:[["qustion 1", ["option 1", true], ["option 2", false]], ["qustion 2", ["option 1", true], ["option 2", false]]],
    	author: `${i+1} author`
    }

 	 	let data = await fetch(`http://localhost:8080/api/add`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log(data);
  }
}

seedData();