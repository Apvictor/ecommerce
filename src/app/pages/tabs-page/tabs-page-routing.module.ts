import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'endereco',
        children: [
          {
            path: '',
            loadChildren: () => import('../endereco/endereco.module').then(m => m.EnderecoModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilModule)
          }
        ]
      },
      {
        path: 'loja',
        children: [
          {
            path: '',
            loadChildren: () => import('../loja/loja.module').then(m => m.LojaModule)
          }
        ]
      },
      {
        path: 'carrinho',
        children: [
          {
            path: '',
            loadChildren: () => import('../carrinho/carrinho.module').then(m => m.CarrinhoModule)
          }
        ]
      },
      {
        path: 'produto',
        children: [
          {
            path: ':idProduto',
            loadChildren: () => import('../produto-modal/produto-modal.module').then(m => m.ProdutoModalModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/loja',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

