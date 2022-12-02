export const loadData = (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value;
    } catch (err) {
      return null;
    }
  };
  
  export const saveData = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return 1;
    } catch (err) {
      return -1;
    }
  };
  export const deleteData = (key) => {
    try {
      localStorage.removeItem(key);
      return 1;
    } catch (err) {
      return -1;
    }
  };
  