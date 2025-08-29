export default async (req, res) => {
  try {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body) || {};
      const data = parsedBody.data || [];

      const user_id = "RamanKishore_LakshiMakesh_16112003";
      const email = "raman.kishore2022@gmail.com";
      const roll_number = "22BCE1699";

      let even_numbers = [];
      let odd_numbers = [];
      let alphabets = [];
      let speical_characters = [];
      let sum = 0;
      let alpha_chars = "";
      data.forEach((item) => {
        if (/^\d+$/.test(item)) {
          const num = parseInt(item);
          sum += num;
          if (num % 2 === 0) {
            even_numbers.push(item);
          } else {
            odd_numbers.push(item);
          }
        } else if (/^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item.toUppercase());
          alpha_chars += item;
        } else {
          speical_characters.push(item);
        }
      });
      const reversed = alpha_chars.split("").reverse().join("");
      let concat_string = "";
      for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
          concat_string += reversed[i].toUppercase();
        } else {
          concat_string += reversed[i].toLowerCase();
        }
      }
      res.status(200).json({
        is_succes: true,
        user_id,
        email,
        roll_number,
        odd_numbers,
        even_numbers,
        alphabets,
        speical_characters,
        sum: sum.toString(),
        concat_string,
      });
    });
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: error.message,
    });
  }
};
