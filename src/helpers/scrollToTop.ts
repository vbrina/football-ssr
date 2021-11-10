const scrollToTop = (id: string) => {
  if (process.browser) {
    setTimeout(() => {
      const element = document.getElementById(`${id}`);
      if (element) {
        element.scrollIntoView({
          block: 'start',
          inline: 'nearest',
          behavior: 'smooth'
        });
      }
    });
  }
};

export default scrollToTop;
