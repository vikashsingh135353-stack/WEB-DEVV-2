const addBtn = document.getElementById("addBtn");
const eventsDiv = document.getElementById("events");
const noEvent = document.getElementById("noEvent");

// Add Event
addBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const cat = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    if (!title || !date || !desc) {
        alert("Please fill all fields");
        return;
    }

    noEvent.style.display = "none";

    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `
        <b>${title}</b><br>
        📅 ${date}<br>
        🏷️ ${cat}<br>
        ${desc}
    `;

    eventsDiv.appendChild(div);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("desc").value = "";
});

// Clear Events
document.getElementById("clearBtn").addEventListener("click", () => {
    eventsDiv.innerHTML = "";
    noEvent.style.display = "block";
});

// Sample Events
document.getElementById("sampleBtn").addEventListener("click", () => {
    noEvent.style.display = "none";
    eventsDiv.innerHTML += `
        <div class="event"><b>Tech Conference</b><br>📅 2026-04-10</div>
        <div class="event"><b>JS Workshop</b><br>📅 2026-04-15</div>
    `;
});

// Keyboard Event
document.addEventListener("keydown", (e) => {
    document.getElementById("key").innerText =
        "You pressed: " + e.key;
});