function makeCoffee() {

    console.log("☕️コーヒーを作っています...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("☑️コーヒーができました。");

        resolve();

      }, 2000); // 2秒

    });

  }

  

  function makeSandwich() {

    console.log("🥪サンドイッチを作っています...");

    return new Promise((resolve) => {

      setTimeout(() => {

        console.log("☑️サンドウィッチができました。");

        resolve();

      }, 3000); // 3秒

    });

  }

  

  async function serveCustomer() {

    await Promise.all([makeCoffee(),makeSandwich()]);

    console.log("");

  }

  

  console.log("お客様がコーヒーとサンドウィッチを注文しました。");

  serveCustomer();