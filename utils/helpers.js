module.exports = {
    format_time: (date) => {
        // format the time as H:MM:SS AM/PM
      return date.toLocaleTimeString();
    },
  };