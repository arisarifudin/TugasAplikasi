import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/kategori',
    name: 'kategori',
    component: () => import('../views/KategoriView.vue')
  },
  {
    path: '/produk',
    name: 'produk',
    component: () => import('../views/ProdukView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue')
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: () => import('../views/SupplierView.vue')
  },
  {
    path: '/pengeluaran',
    name: 'pengeluaran',
    component: () => import('../views/PengeluaranView.vue')
  },
  {
    path: '/pembelian',
    name: 'pembelian',
    component: () => import('../views/PembelianView.vue')
  },
  {
    path: '/laporan',
    name: 'laporan',
    component: () => import('../views/LaporanView.vue')
  },
  {
    path: '/transaksipembelian',
    name: 'transaksipembelian',
    component: () => import('../views/TransaksiPembelian.vue')
  },
  {
    path: '/penjualan',
    name: 'penjualan',
    component: () => import('../views/PenjualanView.vue')
  },
  {
    path: '/transaksiaktif',
    name: 'transaksiaktif',
    component: () => import('../views/TransaksiAktif.vue')
  },
  {
    path: '/transaksibaru',
    name: 'transaksibaru',
    component: () => import('../views/TransaksiBaru.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/pengaturan',
    name: 'pengaturan',
    component: () => import('../views/PengaturanView.vue')
  },
  {
    path: '/cleaner',
    name: 'cleaner',
    component: () => import('../views/CleanerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
