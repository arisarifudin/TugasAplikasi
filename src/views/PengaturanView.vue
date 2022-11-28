<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Pengaturan</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Pengaturan</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->

            <div class="row">
                <div class="col-md-12">
                    <div class="page-body">
                        <div class="card">
                            <div class="card-body">
                                <form action="#">
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Nama Perusahaan</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Telepon</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Alamat</label>
                                        <div class="col-md-9">
                                            <textarea rows="5" cols="5" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Logo Perusahaan</label>
                                        <div class="col-md-9">
                                            <input class="form-control" type="file">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Kartu Member</label>
                                        <div class="col-md-9">
                                            <input class="form-control" type="file">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-form-label col-md-3" style="text-align:left;">Diskon</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
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
