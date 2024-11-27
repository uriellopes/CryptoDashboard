export const saveDataLocalStorage = (key: string, data: any) => {
  const stringfyData = JSON.stringify({ timestamp: Date.now(), value: data });
  localStorage.setItem(key, stringfyData);
};
