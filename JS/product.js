// Looping-Over-Objects-and-Array //
let products = [
    {
        id: 1,
        name: 'HorizonZeroDawn',
        price: 300,
        quantity: 3
    },
    {
        id: 2,
        name: 'HorizonCompleteEdition',
        price: 400,
        quantity: 2
    },
    {
        id: 3,
        name: 'HorizonTheFrozeWilds',
        price: 500,
        quantity: 1
    },
    {
        id: 4,
        name: 'Dishonoured',
        price: 300,
        quantity: 3
    },
    {
        id: 5,
        name: 'DishonouredTheReturnOfDaud',
        price: 400,
        quantity: 2
    },
    {
        id: 6,
        name: 'DishonouredDefinitiveEdition',
        price: 500,
        quantity: 1
    },
    {
        id: 7,
        name: 'MassEffect',
        price: 300,
        quantity: 3
    },
    {
        id: 8,
        name: 'MassEffectAndromeda',
        price: 400,
        quantity: 2
    },
    {
        id: 9,
        name: 'MassEffectAndromedaDeluxeUpgrade',
        price: 500,
        quantity: 1
    }
] 

for(let product in products) {
    console.log(`${products[product].quantity} ${products[product].name} each cost ${products[product].price}`);
};
// Local Storage set //
localStorage.setItem('products', JSON.stringify(products));
// Retrieve LocalStorage //
console.log(JSON.parse(localStorage.getItem('products'))
);
localStorage.getItem('products');
// Retrieve an write Local Storage
if (ItemNo == "" || Item == "" || RefNo == "" || Price == "" || Qty == ""){
}else{
    if(products == []){
        const list = document.querySelector(localStorage.setItem("#row-wor"));
        const row = document.createElement(localStorage.setItem("tr"));

        row.innerHTML = `   <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
        <div class="row d-flex justify-content-around">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/KYtx3N1p/horizonzerodawn-1638924347525.jpg" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Horizon Zero Dawn<br>(Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="h4-mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/j5Nw5PTR/j-AT7-Hjp-L49-A62b-U7h-LKXJ96b.webp" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Horizon Complete Edition<br> (Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/sDKBv3kG/MV5-BY2-M5-Y2-I4-Mj-It-NWJk-ZC00-M2-Y1-LThm-NTMt-Nj-Vl-ZDhi-YWRj-ODhh-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg" class="card-img-top" alt="Meh">
                <div class="card-body mshadow">
                  <h5 class="card-title">Horizon The Frozen Wilds<br>(Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
              </div>
        </div>
    </div>
    <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
        <div class="row d-flex justify-content-around">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/pr5JZpKT/MV5-BYm-Q2-Zj-Zi-ZDAt-ZGNh-ZC00-ZDI5-LTkz-MWQt-MTA2-MTFl-Njky-ODc0-Xk-Ey-Xk-Fqc-Gde-QXVy-Mz-Y0-MTE3-Nz-U-V1.jpg" class="card-img-top" alt="Meh">
                <div class="card-body">
                    <h5 class="card-title mshadow">Dishonoured<br>(Game)</h5>
                    <h3 class="mshadow">•Price•</h3>
                    <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/90DJnxHc/dishonored-5.jpg" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Dishonoured The Return Of Daud<br> (Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/MTFYVyMN/Definitive-Edition-Cover.webp" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Dishonoured Definitive Edition<br>(Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
              </div>
        </div>

    </div>
    <div class="text-dark text-shadow-dark rounded-3 py-5 bible">
        <div class="row d-flex justify-content-around">
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/h4J9dQDW/masseffect3-sq-1641945184920.jpg" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Mass Effect<br>(Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/qMs6s8WY/uh-Wvgrh-Jk-Mk2-Kt-Srmq-XO6qr-Y7nkey-GMO.jpg" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Mass Effect Andromeda<br> (Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;">
                <img src="https://i.postimg.cc/Z5JBVWSq/LYkcxj-G6uj-KJJKUk3-Isx-Psg-Am-AVYTu-MB.webp" class="card-img-top" alt="Meh">
                <div class="card-body">
                  <h5 class="card-title mshadow">Mass Effect Andromeda Deluxe Upgrade<br>(Game)</h5>
                  <h3 class="mshadow">•Price•</h3>
                  <h4 class="mshadow">|R500|</h4>
                  <a href="../html/checkout.html" class="btn btn-info" id="view-product">Add To Checkout</a>
                </div>
              </div>
        </div>

    </div>
</div>     
</div>`;
        list.appendChild(row);
    }else{
        products.children[0].textContent = ItemNo;
        products.children[1].textContent = Item;
        products.children[2].textContent = Price;
        products.children[3].textContent = Qty;
        products.children[4].textContent = Total;
    }
    updatePage();
};


;
// Local Storage //
document.getElementById('view-product').addEventListener("click", function(){
    window.localStorage.Item('data', 'products');
});
// Store
// localStorage.setItem("product", "products");
// Local Storage //
// document.getElementById('view-product').addEventListener("click", function(){
//     window.localStorage.setItem('products', 'product');
// });

// document.getElementById('view-product').addEventListener("click", function(){

// });

// document.getElementById('retrieve-single-item').addEventListener("click", function(){

// });

// document.getElementById('remove-single-item').addEventListener("click", function(){

// });

// document.getElementById('remove-all-items').addEventListener("click", function(){

// });
// Update Function //
// function updatePage(){
//     const values = []
//     let updateThis = window.localStorage.getItem('products');
// };