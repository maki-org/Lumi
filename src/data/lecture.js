export const LECTURE = {
    title: "Work, Energy & Power",
    course: "Physics 101 · Mechanics",
    duration: "47:12",
    lecturer: "Dr. A. Mensah",
    date: "Lecture 12",
    wordCount: 6240,
    concepts: 18,

    // ---- Detailed notes: sections with bullet content ----
    notes: [
        {
            id: "n1",
            heading: "1. The Concept of Work",
            tag: "Foundational",
            body: [
                "Work is done when a force causes a displacement in the direction of the force. If you push a wall and it doesn't move, no work is done — physics is blunt like that.",
                "Mathematically, work is the dot product of force and displacement, so only the component of force along the motion counts.",
                "The SI unit of work is the joule (J), where 1 J = 1 N·m. One joule is roughly the work to lift a small apple one metre.",
            ],
            callout: { type: "key", text: "Work = Force × distance moved in the direction of the force." },
        },
        {
            id: "n2",
            heading: "2. Kinetic & Potential Energy",
            tag: "Core",
            body: [
                "Kinetic energy is the energy of motion. It scales with the square of velocity, so doubling speed quadruples KE — a big reason speeding is dangerous.",
                "Gravitational potential energy is stored energy due to height. Lift an object and you bank energy that gravity can later cash out as motion.",
                "Energy constantly converts between these two forms. A pendulum trades PE for KE at the bottom of its swing and back again at the top.",
            ],
            callout: { type: "tip", text: "At the top of a swing: max PE, zero KE. At the bottom: max KE, min PE." },
        },
        {
            id: "n3",
            heading: "3. Conservation of Energy",
            tag: "Core",
            body: [
                "In an isolated system the total mechanical energy stays constant — it is neither created nor destroyed, only transformed.",
                "Real systems lose energy to friction and air resistance, which is why a real pendulum eventually stops. That energy isn't gone; it becomes heat and sound.",
            ],
            callout: { type: "warn", text: "Friction doesn't destroy energy — it converts it to thermal energy you can't easily reuse." },
        },
        {
            id: "n4",
            heading: "4. Power: The Rate of Doing Work",
            tag: "Applied",
            body: [
                "Power measures how quickly work is done or energy transferred. Two people lift the same box up the same stairs; the faster one is more powerful, not stronger.",
                "The SI unit is the watt (W), equal to one joule per second. A 60 W bulb converts 60 joules of electrical energy every second.",
            ],
            callout: { type: "key", text: "Power = Work done ÷ time taken = Energy transferred ÷ time." },
        },
    ],

    // ---- Quick summary bullets ----
    summary: [
        "Work is force applied over a distance — measured in joules (J).",
        "Kinetic energy (motion) depends on the square of speed; potential energy depends on height.",
        "In an isolated system, total mechanical energy is conserved.",
        "Friction converts useful energy into heat — it doesn't destroy it.",
        "Power is how fast work is done, measured in watts (W).",
        "1 watt = 1 joule per second; 1 horsepower ≈ 746 W.",
    ],

    // ---- Definitions / glossary ----
    definitions: [
        { term: "Work", def: "Energy transferred when a force moves an object through a distance in the force's direction. Unit: joule (J)." },
        { term: "Kinetic Energy", def: "The energy an object possesses due to its motion. Proportional to mass and the square of velocity." },
        { term: "Potential Energy", def: "Stored energy held by an object due to its position or height in a field." },
        { term: "Joule (J)", def: "The SI unit of energy and work. One joule equals one newton-metre." },
        { term: "Power", def: "The rate at which work is done or energy is transferred. Unit: watt (W)." },
        { term: "Watt (W)", def: "The SI unit of power, equal to one joule of energy transferred per second." },
        { term: "Conservation of Energy", def: "Energy cannot be created or destroyed, only transformed from one form to another." },
        { term: "Mechanical Energy", def: "The sum of an object's kinetic and potential energy." },
    ],

    // ---- Formulas ----
    formulas: [
        { name: "Work Done", parts: ["W = F × d"], vars: "W = work (J), F = force (N), d = distance (m)", note: "Only the force component along the motion does work." },
        { name: "Kinetic Energy", parts: ["E", { sub: "k" }, " = ½ · m · v", { sup: "2" }], vars: "m = mass (kg), v = velocity (m/s)", note: "Doubling v quadruples the energy." },
        { name: "Potential Energy", parts: ["E", { sub: "p" }, " = m · g · h"], vars: "g = 9.8 m/s², h = height (m)", note: "Measured relative to a chosen reference level." },
        { name: "Power", parts: ["P = ", { frac: ["W", "t"] }], vars: "W = work (J), t = time (s)", note: "Also P = E / t for any energy transfer." },
        { name: "Power (moving)", parts: ["P = F × v"], vars: "F = force (N), v = velocity (m/s)", note: "Useful for engines at steady speed." },
    ],

    // ---- Diagrams (described placeholders + labels) ----
    diagrams: [
        {
            title: "Pendulum Energy Exchange",
            caption: "Potential energy changes into kinetic energy and back again during one full swing.",
            code: `flowchart LR
    A[Left Side: Max Potential Energy] --> B[Middle: Max Kinetic Energy]
    B --> C[Right Side: Max Potential Energy]
    C --> B
    B --> A`,
        },
        {
            title: "Energy Transfer Chain",
            caption: "Chemical energy in fuel becomes kinetic energy, with some energy lost as heat.",
            code: `flowchart LR
    A[Fuel: Chemical Energy] --> B[Engine Converts Energy]
    B --> C[Car Motion: Kinetic Energy]
    B --> D[Heat and Sound Energy]
    C --> E[Useful Movement]
    D --> F[Energy Loss]`,
        },
        {
            title: "Inclined Plane Forces",
            caption: "Work is done when force moves a box up a ramp over a distance and raises its height.",
            code: `flowchart TD
    A[Applied Force] --> B[Box Moves Up Ramp]
    B --> C[Distance Along Ramp]
    B --> D[Gain in Height]
    D --> E[Increase in Potential Energy]
    C --> F[Work Done = Force × Distance]`,
        },
    ],

    // ---- Flashcards ----
    flashcards: [
        { q: "What is the SI unit of work?", a: "The joule (J), equal to one newton-metre (N·m)." },
        { q: "How does kinetic energy change if speed doubles?", a: "It quadruples — KE is proportional to v²." },
        { q: "State the principle of conservation of energy.", a: "Energy cannot be created or destroyed, only transformed from one form to another." },
        { q: "What is power?", a: "The rate at which work is done or energy is transferred, measured in watts." },
        { q: "Where is potential energy greatest in a pendulum swing?", a: "At the highest points of the swing, where velocity (and KE) is zero." },
        { q: "Write the formula for gravitational potential energy.", a: "Eₚ = m·g·h" },
    ],

    // ---- Quiz (MCQ) ----
    quiz: [
        {
            q: "A force of 10 N moves a box 4 m in the direction of the force. How much work is done?",
            options: ["14 J", "40 J", "2.5 J", "0 J"],
            correct: 1,
            explain: "Work = Force × distance = 10 N × 4 m = 40 J.",
        },
        {
            q: "Which quantity is measured in watts?",
            options: ["Energy", "Force", "Power", "Work"],
            correct: 2,
            explain: "The watt is the SI unit of power — one joule per second.",
        },
        {
            q: "If the speed of an object doubles, its kinetic energy…",
            options: ["Doubles", "Stays the same", "Quadruples", "Halves"],
            correct: 2,
            explain: "KE = ½mv². Squaring the doubled velocity multiplies energy by four.",
        },
        {
            q: "A real pendulum eventually stops swinging because…",
            options: [
                "Energy is destroyed",
                "Friction and air resistance convert energy to heat",
                "Gravity switches off",
                "It runs out of mass",
            ],
            correct: 1,
            explain: "Energy is conserved — it's transferred to heat and sound, not destroyed.",
        },
        {
            q: "At the bottom of a pendulum's swing, the bob has…",
            options: ["Maximum PE", "Maximum KE", "Zero energy", "Maximum height"],
            correct: 1,
            explain: "At the lowest point, height is minimum so PE is minimum and KE is maximum.",
        },
    ],

    // ---- Revision plan ----
    revision: [
        { when: "Today", title: "First review", desc: "Read detailed notes + flip all 6 flashcards", done: true },
        { when: "Tomorrow", title: "Active recall", desc: "Take the 5-question quiz without notes", done: false },
        { when: "In 3 days", title: "Formula drill", desc: "Re-derive all 5 formulas from memory", done: false },
        { when: "In 1 week", title: "Spaced repeat", desc: "Full flashcard deck + weak-spot definitions", done: false },
    ],
};