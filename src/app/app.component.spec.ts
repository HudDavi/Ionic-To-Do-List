import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let statusBarSpy: StatusBar;
  let splashScreenSpy: SplashScreen;
  let platformReadySpy: Promise<void>;
  let platformSpy: Platform;
  let storageSpy: Storage;

  beforeEach(() => {
    statusBarSpy = jasmine.createSpyObj("StatusBar", ["styleDefault"]);
    splashScreenSpy = jasmine.createSpyObj("SplashScreen", ["hide"]);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj("Platform", { ready: platformReadySpy });
    storageSpy = jasmine.createSpyObj("Storage", ["create"]);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: Storage, useValue: storageSpy },
      ],
    }).compileComponents();
  });

  it("Deve Criar o Aplicativo", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("Deve Inicializar o Aplicativo", async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
    expect(storageSpy.create).toHaveBeenCalled();
  });
});
