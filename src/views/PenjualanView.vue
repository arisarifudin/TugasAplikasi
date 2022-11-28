<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Daftar Penjualan</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Daftar Penjualan</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="col-auto float-right ml-auto">
                        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#add_policy">
                            <i class="fa fa-plus"></i> Tambah Data
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
                                    <th>Tanggal</th>
                                    <th>Kode Member</th>
                                    <th>Total Item</th>
                                    <th>Total Harga</th>
                                    <th>Diskon</th>
                                    <th>Total Bayar</th>
                                    <th>Kasir</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>23 Oktober 2022</td>
                                    <td>00001</td>
                                    <td>5</td>
                                    <td>Rp. 20.000</td>
                                    <td>0%</td>
                                    <td>Rp. 20.000</td>
                                    <td>Sinta Ayu</td>
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
                                    <td>22 Oktober 2022</td>
                                    <td>00002</td>
                                    <td>1</td>
                                    <td>Rp. 8.000</td>
                                    <td>0%</td>
                                    <td>Rp. 8.000</td>
                                    <td>Sinta Ayu</td>
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
                        <h5 class="modal-title">Tambah Kategori</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Kategori</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control">
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