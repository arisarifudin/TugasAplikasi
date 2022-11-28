<template>
    <!-- Page Wrapper -->
    <div class="page-wrapper">

        <!-- Page Content -->
        <div class="content container-fluid">
            <!-- Page Header -->
            <div class="page-header">
                <div class="row align-items-center">
                    <div class="col">
                        <h3 class="page-title">Daftar Pembelian</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Daftar Pembelian</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div class="col-auto float-right ml-auto">
                        <a href="#" class="btn btn-success" data-toggle="modal" data-target="#add_policy">
                            <i class="fa fa-plus"></i>Transaksi Baru
                        </a>&nbsp;
                        <a href="#" class="btn btn-info" data-toggle="modal" data-target="#add_policy">
                            <i class="fa fa-pencil"></i>Transaksi Aktif
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
                                    <th>Supplier</th>
                                    <th>Total Item</th>
                                    <th>Total Harga</th>
                                    <th>Diskon</th>
                                    <th>Total Bayar</th>
                                    <th class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>18 Oktober 2022</td>
                                    <td>PT. Apotek Indah</td>
                                    <td>6</td>
                                    <td>Rp. 60.000</td>
                                    <td>0%</td>
                                    <td>Rp. 60.000</td>
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
                                    <td>20 Oktober 2022</td>
                                    <td>PT. Apotek Putri</td>
                                    <td>10</td>
                                    <td>Rp. 100.000</td>
                                    <td>5%</td>
                                    <td>Rp. 95.000</td>
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
            <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Pilih Supplier</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table id="myTable2" class="table table-striped table-bordered" cellspacing="0"
                                    width="100%">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Telepon</th>
                                            <th>Alamat</th>
                                            <th class="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>PT. Apotek Putri</td>
                                            <td>087757789811</td>
                                            <td>Jl. Jend. A. Yani, Pacitan, Kec. Pacitan</td>
                                            <td align="center">
                                                <a href="#" class="btn"><i class="fa fa-check-square m-r-5"
                                                        style="color:blue"> Pilih</i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>PT. Apotek Indah</td>
                                            <td>087817428067</td>
                                            <td>Jl. Cut Nyak Dien, Ploso, Kec. Pacitan</td>
                                            <td align="center">
                                                <a href="#" class="btn"><i class="fa fa-check-square m-r-5"
                                                        style="color:blue"> Pilih</i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
        $(document).ready(function () {
            $('#myTable2').DataTable({
                select: true
            });
        });
    },
};
</script>