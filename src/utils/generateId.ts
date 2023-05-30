export const randomId = ():string => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * 8);
    result += characters.charAt(randomIndex);
  }

  return result;
};
