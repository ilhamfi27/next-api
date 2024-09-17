import 'reflect-metadata'; // Required for Reflect API
import { IpAddress, getIpAddressParameter } from './api-request-ip-decorator'; // Update the path accordingly

describe('IpAddress Decorator', () => {
  it('should store metadata for the IP address parameter', () => {
    class TestClass {
      someMethod(@IpAddress() ipAddress: string) {}
    }

    const metadata = getIpAddressParameter(TestClass.prototype, 'someMethod');
    
    expect(metadata).toBe(0); // First parameter (index 0)
  });
});