(function connect() {
  let socket = io.connect("http://localhost:3000");

  setInterval(() => {
      let data = {
          lat: 14.222,
          long: 20.555
      }
      socket.emit('get_data', data)
  }, 3000);

  // let data = {
  //   lat: 14.222,
  //   long: 20.555,
  // };
  // socket.emit("get_data", data);
})();
