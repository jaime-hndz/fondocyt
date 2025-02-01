import Cookies  from 'universal-cookie';
import { Apps } from '../AppsJson';

var cookies = new Cookies()
export const UserSetter = (response:any, remember:boolean, app?:any, appRealmId?: any) => {
    
    if (response.data.result === 'Failed') {
        throw new Error('Creedenciales incorrectas')
    }

    if (response.data.token) {
        
        var token = response.data.token;
        const jwtBody = JSON.parse(window.atob(token.split('.')[1]));

        const fechaExpiracion = remember ? new Date(jwtBody.exp * 1000) : undefined;
        
        
        var cookiesConfig = {path: '/', expires: fechaExpiracion, sameSite: false}
 
        var objetoModificado = { ...response.data.response };

        objetoModificado.applicationRealms = [];
        objetoModificado.expirationDate = fechaExpiracion
        objetoModificado.currentOwner = {id:objetoModificado.realmId }

        cookies.set('usuario', objetoModificado, cookiesConfig)
        cookies.set('token', response.data.token, cookiesConfig)
        cookies.set('applicationrealms', formatApplicationRealms(response.data.response.applicationRealms), cookiesConfig)

    
        if (app !== null) {
          var currentApp = Apps().find((a) => a.id === app);

          if (currentApp) {
            window.location.href = `${currentApp?.link}`;
          } else {
            window.location.href = "./";
          }
        } else {
          window.location.href = "./";
        }
    }

}

interface SubRealm {
  id: string;
  label: string;
}

function formatApplicationRealms(inputData: any[]): {
  id: string;
  applicationName: string;
  subRealms: SubRealm[];
}[] {
  const result:any = [];

  inputData.forEach(applicationRealm => {
      const applicationData:any = {
          id: applicationRealm.id,
          applicationName: applicationRealm.applicationName
      };

      const subRealmsData = applicationRealm.subRealms.map((subRealm:any) => {
          return {
              id: subRealm.id,
              label: subRealm.label
          };
      });

      applicationData.subRealms = subRealmsData;
      result.push(applicationData);
  });

  return result;
}