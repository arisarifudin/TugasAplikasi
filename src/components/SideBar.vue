<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="active">
                        <router-link to="/"><i class="la la-dashboard"></i> <span>Dashboard</span></router-link>
                    </li>

                    <li class="menu-title">
                        <span>MASTER</span>
                    </li>
                    <li>
                        <router-link to="/kategori"><i class="la la-box"></i> <span>Kategori</span></router-link>
                    </li>
                    <li>
                        <router-link to="/produk"><i class="la la-boxes"></i> <span>Produk</span></router-link>
                    </li>
                    <li>
                        <router-link to="/member"><i class="la la-credit-card"></i> <span>Member</span></router-link>
                    </li>
                    <li>
                        <router-link to="/supplier"><i class="la la-truck"></i> <span>Supplier</span></router-link>
                    </li>

                    <li class="menu-title">
                        <span>TRANSAKSI</span>
                    </li>
                    <li>
                        <router-link to="/pengeluaran"><i class="la la-money"></i> <span>Pengeluaran</span></router-link>
                    </li>
                    <li>
                        <router-link to="/transaksipembelian"><i class="la la-upload"></i> <span>Pembelian Barang</span></router-link>
                    </li>
                    <li>
                        <router-link to="/penjualan"><i class="la la-download"></i> <span>Penjualan Barang</span></router-link>
                    </li>
                    <li>
                        <router-link to="/transaksiaktif"><i class="la la-shopping-cart"></i> <span>Transaksi Aktif</span></router-link>
                    </li>
                    <li>
                        <router-link to="/transaksibaru"><i class="la la-shopping-cart"></i> <span>Transaksi Baru</span></router-link>
                    </li>

                    <li class="menu-title">
                        <span>REPORT</span>
                    </li>
                    <li>
                        <router-link to="/laporan"><i class="la la-file-pdf-o"></i> <span>Laporan</span></router-link>
                    </li>

                    <li class="menu-title">
                        <span>SYSTEM</span>
                    </li>
                    <li>
                        <router-link to="/user"><i class="la la-user-plus"></i> <span>User</span></router-link>
                    </li>
                    <li>
                        <router-link to="/pengaturan"><i class="la la-cog"></i> <span>Pengaturan</span></router-link>
                    </li>
                    <li>
                        <router-link to="/cleaner"><i class="la la-refresh"></i> <span>Cleaner</span></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>