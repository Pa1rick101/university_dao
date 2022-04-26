import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x2F2591a3dfa99c86c27dc61eCbE03eF300FE7D2a");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Book of Knowledge",
        description: "This NFT will give you access to UniversityDAO!",
        image: readFileSync("scripts/assets/book.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();