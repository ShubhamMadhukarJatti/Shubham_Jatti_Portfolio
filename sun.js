{/* <script>
  const toggleDiv = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-toggle-sun");
  const moonIcon = document.getElementById("theme-toggle-moon");

  // Check saved theme or system preference
  if (localStorage.theme === 'dark' || 
     (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
  }

  toggleDiv.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      localStorage.theme = "light";
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  });
</script> */}
document.addEventListener("DOMContentLoaded", () => {
  const toggleDiv = document.getElementById("theme-toggle");
  const sunIcon = document.getElementById("theme-toggle-sun");
  const moonIcon = document.getElementById("theme-toggle-moon");

  if (!toggleDiv || !sunIcon || !moonIcon) {
    console.error("Theme toggle elements missing in the DOM");
    return;
  }

  // Initial theme load
  if (
    localStorage.theme === "dark" ||
    (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
  } else {
    moonIcon.classList.remove("hidden");
  }

  toggleDiv.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.theme = "dark";
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      localStorage.theme = "light";
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  });
});
