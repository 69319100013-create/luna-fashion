const products = [

    {
        id: 1,

        name:
        "LUNA Basic T-Shirt",

        price: 290,

        image:
        "images/tshirt.jpg",

        description:
        "เสื้อยืดแฟชั่น เนื้อผ้านุ่ม ใส่สบาย เหมาะสำหรับวันสบาย ๆ",

        colors:
        "ขาว / ดำ / ชมพู",

        sizes:
        "S / M / L / XL"
    },


    {
        id: 2,

        name:
        "LUNA Denim Jeans",

        price: 590,

        image:
        "images/jeans.jpg",

        description:
        "กางเกงยีนส์เอวสูง ทรงสวย ใส่ได้ทั้งวัน",

        colors:
        "ฟ้า / น้ำเงิน",

        sizes:
        "S / M / L / XL"
    },


    {
        id: 3,

        name:
        "LUNA Denim Dress",

        price: 690,

        image:
        "images/dress.jpg",

        description:
        "เดรสยีนส์แฟชั่น ดีไซน์เรียบหรู",

        colors:
        "ฟ้า / น้ำเงิน",

        sizes:
        "S / M / L"
    },


    {
        id: 4,

        name:
        "LUNA Soft Knit",

        price: 490,

        image:
        "images/knit.jpg",

        description:
        "เสื้อไหมพรมเนื้อนุ่ม ใส่สบาย",

        colors:
        "ครีม / น้ำตาล / ชมพู",

        sizes:
        "Free Size"
    },


    {
        id: 5,

        name:
        "LUNA Blazer",

        price: 890,

        image:
        "images/blazer.jpg",

        description:
        "เบลเซอร์แฟชั่น เหมาะกับลุคทำงาน",

        colors:
        "ครีม / ดำ",

        sizes:
        "S / M / L"
    }

];


const chatBox =
    document.getElementById("chatBox");


function addBotMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "message bot";

    message.innerHTML = `
        <div class="bubble">
            ${text}
        </div>
    `;

    chatBox.appendChild(message);

    scrollChat();
}


function addUserMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "message user";

    message.innerHTML = `
        <div class="bubble">
            ${text}
        </div>
    `;

    chatBox.appendChild(message);

    scrollChat();
}


function scrollChat() {

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


/* แสดงสินค้า */

function showProducts() {

    addUserMessage(
        "🛍️ ดูสินค้า"
    );

    setTimeout(() => {

        let html = `
            <b>
                สินค้าแนะนำจาก
                LUNA FASHION 🌙
            </b>

            <br><br>
        `;


        products.forEach(product => {

            html += `

                <div class="product">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div
                        class="product-info"
                    >

                        <div
                            class="product-name"
                        >
                            ${product.name}
                        </div>


                        <div
                            class="price"
                        >
                            ${product.price}
                            บาท
                        </div>


                        <div>
                            ${product.description}
                        </div>


                        <div>
                            🎨 สี:
                            ${product.colors}
                        </div>


                        <div>
                            📏 ไซซ์:
                            ${product.sizes}
                        </div>


                        <button
                            onclick="selectProduct(${product.id})"
                        >
                            เลือกสินค้านี้
                        </button>

                    </div>

                </div>
            `;

        });


        html += `

            <div
                class="choice-buttons"
            >

                <button
                    onclick="mainMenu()"
                >
                    🏠 เมนูหลัก
                </button>


                <button
                    onclick="endChat()"
                >
                    👋 จบการสนทนา
                </button>

            </div>

        `;


        addBotMessage(html);

    }, 400);
}


/* เลือกสินค้า */

function selectProduct(id) {

    const product =
        products.find(
            p => p.id === id
        );


    addUserMessage(
        `เลือก ${product.name}`
    );


    setTimeout(() => {

        addBotMessage(`

            <b>
                ${product.name}
            </b>

            🌙

            <br><br>

            💰 ราคา:
            <b>
                ${product.price}
                บาท
            </b>

            <br>

            🎨 สี:
            ${product.colors}

            <br>

            📏 ไซซ์:
            ${product.sizes}

            <br><br>

            คุณต้องการไซซ์อะไรคะ?

            <div
                class="choice-buttons"
            >

                <button
                    onclick="chooseSize('${product.name}','S')"
                >
                    S
                </button>

                <button
                    onclick="chooseSize('${product.name}','M')"
                >
                    M
                </button>

                <button
                    onclick="chooseSize('${product.name}','L')"
                >
                    L
                </button>

                <button
                    onclick="chooseSize('${product.name}','XL')"
                >
                    XL
                </button>

            </div>

        `);

    }, 400);
}


/* เลือกไซซ์ */

function chooseSize(
    productName,
    size
) {

    addUserMessage(
        `ไซซ์ ${size}`
    );


    setTimeout(() => {

        addBotMessage(`

            ✅ เลือก
            <b>
                ${productName}
            </b>

            <br>

            📏 ไซซ์
            <b>
                ${size}
            </b>

            เรียบร้อยแล้วค่ะ

            <br><br>

            ต้องการทำอะไรต่อคะ?

            <div
                class="choice-buttons"
            >

                <button
                    onclick="showProducts()"
                >
                    🛍️ ดูสินค้าอื่น
                </button>


                <button
                    onclick="mainMenu()"
                >
                    🏠 เมนูหลัก
                </button>


                <button
                    onclick="endChat()"
                >
                    👋 จบการสนทนา
                </button>

            </div>

        `);

    }, 400);
}


/* แนะนำสินค้า */

function recommendProduct() {

    addUserMessage(
        "✨ แนะนำสินค้า"
    );


    setTimeout(() => {

        addBotMessage(`

            ✨ ได้เลยค่ะ!

            <br><br>

            👕 ถ้าต้องการ
            <b>ลุคสบาย ๆ</b>

            แนะนำ
            <b>
                LUNA Basic T-Shirt
            </b>

            ราคา 290 บาท

            <br><br>

            👗 ถ้าต้องการ
            <b>ลุคแฟชั่น</b>

            แนะนำ
            <b>
                LUNA Denim Dress
            </b>

            ราคา 690 บาท

            <br><br>

            🧥 ถ้าต้องการ
            <b>ลุคทำงาน</b>

            แนะนำ
            <b>
                LUNA Blazer
            </b>

            ราคา 890 บาท

            <br><br>

            <div
                class="choice-buttons"
            >

                <button
                    onclick="showProducts()"
                >
                    🛍️ ดูสินค้าทั้งหมด
                </button>


                <button
                    onclick="mainMenu()"
                >
                    🏠 เมนูหลัก
                </button>

            </div>

        `);

    }, 400);
}


/* ตารางไซซ์ */

function showSize() {

    addUserMessage(
        "📏 ดูตารางไซซ์"
    );


    setTimeout(() => {

        addBotMessage(`

            <b>
                📏 ตารางไซซ์
                LUNA FASHION
            </b>

            <br><br>

            S —
            รอบอก 32–34 นิ้ว

            <br>

            M —
            รอบอก 35–37 นิ้ว

            <br>

            L —
            รอบอก 38–40 นิ้ว

            <br>

            XL —
            รอบอก 41–43 นิ้ว

            <br><br>

            หากไม่แน่ใจเรื่องไซซ์
            สามารถสอบถาม LUNA BOT
            ได้เลยค่ะ 😊

            <div
                class="choice-buttons"
            >

                <button
                    onclick="mainMenu()"
                >
                    🏠 เมนูหลัก
                </button>

            </div>

        `);

    }, 400);
}


/* เมนูหลัก */

function mainMenu() {

    addUserMessage(
        "🏠 เมนูหลัก"
    );


    setTimeout(() => {

        addBotMessage(`

            🌙 กลับมาที่
            <b>เมนูหลัก</b>
            แล้วค่ะ

            <br><br>

            วันนี้ให้ LUNA BOT
            ช่วยอะไรดีคะ?

            <div
                class="menu"
            >

                <button
                    onclick="showProducts()"
                >
                    🛍️ ดูสินค้า
                </button>


                <button
                    onclick="recommendProduct()"
                >
                    ✨ แนะนำสินค้า
                </button>


                <button
                    onclick="showSize()"
                >
                    📏 ดูไซซ์
                </button>


                <button
                    onclick="endChat()"
                >
                    👋 จบการสนทนา
                </button>

            </div>

        `);

    }, 300);
}


/* จบการสนทนา */

function endChat() {

    addUserMessage(
        "👋 จบการสนทนา"
    );


    setTimeout(() => {

        addBotMessage(`

            🌙 ขอบคุณที่ใช้บริการ
            <b>LUNA BOT</b>

            <br><br>

            ขอบคุณที่เลือกช้อปกับ
            <b>LUNA FASHION</b>
            💜

            <br>

            แล้วพบกันใหม่ค่ะ!

        `);

    }, 400);
}


/* รับข้อความ */

function sendMessage() {

    const input =
        document.getElementById(
            "userInput"
        );


    const text =
        input.value.trim();


    if (text === "") {
        return;
    }


    addUserMessage(text);


    input.value = "";


    setTimeout(() => {

        chatbotReply(text);

    }, 500);
}


/* Enter */

function handleEnter(event) {

    if (
        event.key === "Enter"
    ) {

        sendMessage();

    }
}


/* ระบบตอบข้อความ */

function chatbotReply(text) {

    const message =
        text.toLowerCase();


    if (
        message.includes("สินค้า")
    ) {

        showProducts();

    }

    else if (
        message.includes("แนะนำ")
    ) {

        recommendProduct();

    }

    else if (
        message.includes("ไซซ์") ||
        message.includes("ขนาด")
    ) {

        showSize();

    }

    else if (
        message.includes("เมนู")
    ) {

        mainMenu();

    }

    else if (
        message.includes("สวัสดี")
    ) {

        addBotMessage(`

            🌙 สวัสดีค่ะ!

            <br><br>

            ยินดีต้อนรับสู่
            <b>LUNA FASHION</b>

            <br>

            ฉันคือ
            <b>LUNA BOT</b>
            ผู้ช่วยช้อปปิ้งออนไลน์ค่ะ 💜

        `);

    }

    else {

        addBotMessage(`

            😊 ขอโทษค่ะ
            LUNA BOT
            ยังไม่เข้าใจคำถามนี้

            <br><br>

            ลองเลือกเมนูด้านล่าง
            ได้เลยค่ะ

            <div
                class="menu"
            >

                <button
                    onclick="showProducts()"
                >
                    🛍️ ดูสินค้า
                </button>


                <button
                    onclick="recommendProduct()"
                >
                    ✨ แนะนำสินค้า
                </button>


                <button
                    onclick="showSize()"
                >
                    📏 ดูไซซ์
                </button>


                <button
                    onclick="mainMenu()"
                >
                    🏠 เมนูหลัก
                </button>

            </div>

        `);

    }
}
