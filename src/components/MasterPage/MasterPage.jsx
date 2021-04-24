import React from 'react';

const MasterPage = (props) => {
    return (
        <>
            <nav class="nav-top p-3">
                <div class="container-fluid d-flex align-items-center pad-0">
                    <h2 class="m-0 letter_space_10x text-uppercase">TIC-TAC-TOE</h2>
                </div>
            </nav>
            <section class="text-center home_page_section text-white pt-5">
                <div class="container justify-content-center">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-12 col-md-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MasterPage;