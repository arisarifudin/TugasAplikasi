<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">

    <!-- Page Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col">
            <h3 class="page-title">Laporan Pendapatan</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active">Laporan Pendapatan</li>
            </ul>
          </div>
        </div>
        <div>
          <div class="col-auto float-right ml-auto">
            <a href="#" class="btn btn-success" data-toggle="modal" data-target="#add_policy">
              <i class="fa fa-plus"></i> Ubah Periode
            </a>&nbsp;
            <a href="#" class="btn btn-info">
              <i class="fa fa-th"></i> Export PDF
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
                  <th>Penjualan</th>
                  <th>Pembelian</th>
                  <th>Pengeluaran</th>
                  <th>Pendapatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20 Oktober 2022</td>
                  <td>27.000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>27.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>21 Oktober 2022</td>
                  <td>32.000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>32.000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>22 Oktober 2022</td>
                  <td>25.000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>25.000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>23 Oktober 2022</td>
                  <td>40.000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>40.000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>24 Oktober 2022</td>
                  <td>35.000</td>
                  <td>0</td>
                  <td>0</td>
                  <td>35.000</td>
                </tr>
                <tr>
                  <td colspan=5 class="text-right"> Total Pendapatan</td>
                  <td>159.000</td>
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
            <h5 class="modal-title">Periode Laporan</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">Tanggal Awal</label>
                <div class="col-sm-8">
                  <input type="date" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">Tanggal Akhir</label>
                <div class="col-sm-8">
                  <input type="date" class="form-control">
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