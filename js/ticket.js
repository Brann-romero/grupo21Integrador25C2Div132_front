document.addEventListener("DOMContentLoaded", () => {
    const spanCliente = document.getElementById("ticket-cliente");
    const spanFecha = document.getElementById("ticket-fecha");
    const contItems = document.getElementById("ticket-items");
    const spanTotal = document.getElementById("ticket-total");

    const ticket = JSON.parse(localStorage.getItem("ticket")) || null;

    if (!ticket) {
        contItems.innerHTML = "<p>No hay ticket generado.</p>";
        return;
    }

    spanCliente.textContent = ticket.cliente;
    spanFecha.textContent = ticket.fecha;
    spanTotal.textContent = `$${ticket.total}`;

    contItems.innerHTML = "";
    ticket.items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <div><strong>${item.nombre}</strong></div>
            <div>Cantidad: ${item.cantidad}</div>
            <div>Subtotal: $${item.subtotal}</div>
        `;
        contItems.appendChild(div);
    });
});
