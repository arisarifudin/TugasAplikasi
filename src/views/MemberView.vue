<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Daftar Member</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Daftar Member</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="col-auto float-right ml-auto">
                        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#add_policy">
                            <i class="fa fa-plus"></i> Tambah Data
                        </a>&nbsp;
                        <a href="#" class="btn btn-info">
                            <i class="fa fa-download"></i> Cetak Member
                        </a>
                    </div>
                </div>
            </div><br>
            <!-- /Page Header -->

            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table id="myTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Kode</th>
                                    <th>Nama</th>
                                    <th>Telepon</th>
                                    <th>Alamat</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td class="btn btn-success btn-xs" style="margin-top: 7px;">00001</td>
                                    <td>Anisa Kartini Putri</td>
                                    <td>08989427706</td>
                                    <td>JL. KH. Agus Salim No.18, Pangarangan, Kec. Kota Sumenep</td>
                                    <td align="center">
                                        <a href="#" class="btn btn-light"><i class="fa fa-pencil m-r-5"
                                                style="color:orange"></i>
                                        </a>
                                        <a href="#" class="btn btn-light">
                                            <i class="fa fa-trash-o m-r-5" style="color:red"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td class="btn btn-success btn-xs" style="margin-top: 7px;">00002</td>
                                    <td>Riska Ayu Ramadhani</td>
                                    <td>087817428067</td>
                                    <td>Jl. Diponegoro No.8, Bangselok, Kec. Kota Sumenep</td>
                                    <td align="center">
                                        <a href="#" class="btn btn-light"><i class="fa fa-pencil m-r-5"
                                                style="color:orange"></i>
                                        </a>
                                        <a href="#" class="btn btn-light">
                                            <i class="fa fa-trash-o m-r-5" style="color:red"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- /Content End -->

        </div>
        <!-- /Page Content -->

        <!-- Add Policy Modal -->
        <div id="add_policy" class="modal custom-modal fade" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Member</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Nama</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Telepon</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Alamat</label>
                                <div class="col-sm-9">
                                    <textarea rows="5" cols="5" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="submit-section">
                                <button class="btn btn-primary">Simpan</button>&nbsp;
                                <button class="btn btn-info">Batal</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- /Add Policy Modal -->

    </div>
    <!-- /Page Wrapper -->
</template>

<script>
import $ from "jquery";

export default {

    mounted() {
        $(document).ready(function () {
            $('#myTable').DataTable({
                select: true
            });
        });
    },
};
</script>