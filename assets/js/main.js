(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
          // Mostrar el modal SOLO si es válido
          const modal = new bootstrap.Modal(
            document.getElementById("waitlistSuccessModal")
          );
          modal.show();

          form.reset();
          form.classList.remove("was-validated");
        } else {
          // mostrar errores
          form.classList.add("was-validated");
        }
      },
      false
    );
  });
})();
