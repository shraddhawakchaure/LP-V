RMI folder - 4 files
In RMI
1) javac *.java
2) rmic AddServerImpl
3) rmiregistry
server ffolder - AddServer.class AddServerImpl_stub.class
AddServerImpl.class AddServerIntf.class
client folder - AddClient.class AddServerImpl_stub.class
AddServerIntf.class
4) ter2 - java AddServer
5) ter3 - java AddClient 127.0.0.1 8 9

In folder - 4 files
1)idlj -fall ReverseModule.idl
2) javac *.java ReverseModule.java
3) orbd -ORBInitialPort 1050&
ter2 - java ReverseClient -ORBInitialPort 1050 -ORBI
ter1 - java ReverseServer -ORBInitialPort 1050& -ORB

export MPJ_HOME=path to mpj-v0_44
export PATH=$PATH:$MPJ_HOME/bin:$PATH
javac -cp $MPJ_HOME/lib/mpj.jar Assign3.java
$MPJ_HOME/bin/mpjrun.sh -np 4 Assign3

python3
gedit &
python3 berkeleys.py
