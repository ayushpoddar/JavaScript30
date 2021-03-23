const inputs = document.querySelectorAll(".controls input");

function handleUpdate(e) {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

inputs.forEach(input => input.addEventListener("mousedown", e =>
                                                input.addEventListener("mousemove", handleUpdate)))

inputs.forEach(input => input.addEventListener("mouseup", e =>
                                                input.removeEventListener("mousemove", handleUpdate)))