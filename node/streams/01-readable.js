import { Readable } from "node:stream";

class CustomStream extends Readable {
  count = 0;
  max = 10;

  constructor() {
    super();
  }

  _read(size) {
    setImmediate(() => {
      if (this.count < this.max) {
        console.log(`Pushing chunk ${this.count + 1}`);
        this.push("Data chunk\n");
        this.count++;
      } else {
        this.push(null);
      }
    });
  }
}

const customStream = new CustomStream();

customStream.on("data", (chunk) => {
  console.log(`Received: ${chunk}`);
});

customStream.on("end", () => {
  console.log("No more data.");
});

customStream.on("error", (err) => {
  console.error("Error:", err);
});
