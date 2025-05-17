document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const submitBtn = document.getElementById("submit-btn");
    const successMessage = document.getElementById("form-message");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                form.reset();
                successMessage.style.display = "block";

                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 1000);
            } else {
                alert("Oops! There was a problem submitting the form.");
            }
        } catch (error) {
            alert("Network error. Please try again later.");
        }

        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
    });
});