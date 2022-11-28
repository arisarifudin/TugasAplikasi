<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Transaksi Baru</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Transaksi Baru</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->

            <div class="row">
                <div class="col-md-12">
                    <div class="page-body">
                        <div class="card">
                            <br>
                            <div class="card-body">
                                <form action="#">
                                    <div class="input-group">
                                        <label class="col-form-label">Kode Produk</label>&nbsp; &nbsp; &nbsp; &nbsp;
                                        <input type="text" class="form-control">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fa fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form><br>

                                <div class="table-responsive">
                                    <table id="myTable" class="table table-striped table-bordered" cellspacing="0"
                                        width="100%">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Kode</th>
                                                <th>Nama</th>
                                                <th>Harga</th>
                                                <th>Jumlah</th>
                                                <th>Diskon</th>
                                                <th>Subtotal</th>
                                                <th class="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <form action="#">
                                    <div class="row">
                                        <div class="col-xl-8">
                                            <div class="form-group row">
                                                <div class="col-lg-12">
                                                    <input type="text" class="form-control" value="Rp. 0"
                                                        style="height: 110px; text-align:center; background-color: #007bff; color:white; font-size:60px;">
                                                </div>
                                                <div class="col-lg-12">
                                                    <input type="text" value="Rupiah" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-4">
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Total</label>
                                                <div class="col-lg-9">
                                                    <input type="text" value="Rp. 0" class="form-control" disabled>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Member</label>
                                                <div class="col-lg-9">
                                                    <select class="form-control">
                                                        <option>Pilih Member</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Diskon</label>
                                                <div class="col-lg-9">
                                                    <input type="text" value="0" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Bayar</label>
                                                <div class="col-lg-9">
                                                    <input type="text" value="Rp. 0" class="form-control" disabled>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Diterima</label>
                                                <div class="col-lg-9">
                                                    <input type="text" value="0" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-lg-3 col-form-label">Kembali</label>
                                                <div class="col-lg-9">
                                                    <input type="text" value="Rp. 0" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Simpan
                                            Transaksi</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- /Content End -->

        </div>
        <!-- /Page Content -->

    </div>
    <!-- /Page Wrapper -->
</template>
