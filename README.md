# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




<div class="product-card bg-white p-4 rounded-lg shadow-md mt-4">
                        <div class="font-semibold mb-3 list-decimal" id="selected-product">
                        </div>
                        <h3 class="font-medium mb-3 border-t-2 pt-3">Total price: <span id="total-prize">00.00</span> Tk</h3>                                             
                        <h3 class="font-medium mb-3">Discount: <span id="discount-ammount">00.00</span> Tk</h3>                                             
                        <h3 class="font-medium mb-3">Total: <span id="final-total">00.00</span> Tk</h3>  
                        <div class="flex justify-center border-t-2 pt-3">
                            <button class="bg-pink-500 text-gray-400 rounded px-6 py-1 text-center cursor-not-allowed" disabled id="purchaseBtn" onclick="my_modal_6.showModal()">Make Purchase</button> 
                        </div>  
                          <div class="card-actions">
                            <dialog id="my_modal_6" class="rounded-lg shadow-md lg:px-[50px] px-[20px] text-center lg:mt-[150px] lg:ml-[600px] md:mt-[150px] md:ml-[270px] mt-[80px] ml-[85px]">
                              <form method="dialog" class="modal-box  py-[20px] lg:py-[50px]">
                                <div class="flex justify-center items-center">
                                    <img src="images/congo.png" alt="fruit" class="w-1/2">
                                  </div>
                                <h3 class="lg:text-3xl font-bold">Congratulations</h3>
                                <p class="py-2 text-sm lg:text-[18px]">You Purchase the product</p>
                                <div class="text-center mt-[10px]">
                                  <button class="bg-pink-500 text-white rounded px-6 py-1 text-center" id="home-btn">Go Home</button>
                                </div>
                              </form>
                            </dialog>
                          </div>           
</div> 
